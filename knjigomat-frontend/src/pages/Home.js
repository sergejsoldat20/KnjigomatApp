/* eslint-disable no-unused-vars */
import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../App.css";
import {
  DollarOutlined,
  BookOutlined,
  UserOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Select, Space, InputNumber, Button } from "antd";
import postService from "../services/postService";
import ViewMiniPost from "../views/ViewMiniPost";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const allKeys = ["filter-1", "filter-2", "filter-3", "filter-4", "refresh"];
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(16);
  const allPageSizes = [12, 16, 20];
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const [postsSize, setPostsSize] = useState(0);
  useEffect(() => {
    loadPosts();
    console.log(priceFrom);
    console.log(priceTo);
    console.log(selectedCategory);
    console.log(selectedAuthor);
  }, [currentPage, postsSize, pageSize]);
  useEffect(() => {
    loadAuthors();
    loadCategories();
  }, []);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
  const setSort = (n) => {
    let sortByCriteria = "";
    n > 1 ? (sortByCriteria += "price,") : (sortByCriteria += "createdTime,");
    n % 2 === 0 ? (sortByCriteria += "desc") : (sortByCriteria += "asc");
    setSelectedSort(sortByCriteria);
  };
  const loadPosts = () => {
    postService
      .getFiltered(
        currentPage,
        pageSize,
        priceFrom,
        priceTo,
        selectedCategory,
        selectedAuthor,
        selectedSort
      )
      .then((result) => {
        setPosts(result.data.content);
        setPostsSize(result.data.totalElements);
      });
  };
  const loadAuthors = () => {
    postService.getAllDistinctAuthors().then((result) => {
      setAuthors(result.data);
    });
  };
  const loadCategories = () => {
    postService.getAllDistinctCategories().then((result) => {
      setCategories(result.data);
    });
  };
  const { Content, Sider } = Layout;
  const filters = ["Cijena", "Kategorija", "Autor", "Sortiraj", "Osvjezi"];
  const sortBy = ["Najnovije", "Najstarije", "Najskuplje", "Najjeftinije"];
  const items = [
    {
      key: allKeys[0],
      label: filters[0],
      icon: React.createElement(DollarOutlined),
      children: [
        {
          label: (
            <Space style={{ alignItems: "center" }}>
              <InputNumber
                onChange={(value) => setPriceFrom(value)}
                placeholder="Od"
                allowClear={true}
              />
              <InputNumber
                onChange={(value) => setPriceTo(value)}
                placeholder="Do"
                allowClear={true}
              />
            </Space>
          ),
          key: "value-range",
        },
      ],
    },
    {
      key: allKeys[1],
      label: filters[1],
      icon: React.createElement(BookOutlined),
      children: [
        {
          label: (
            <Select
              onChange={(selectedCategory) => {
                setSelectedCategory(selectedCategory);
              }}
              style={{ width: "100%" }}
              allowClear={true}
            >
              {categories.map((category, index) => (
                <Select.Option key={index} value={category}>
                  {category}
                </Select.Option>
              ))}
            </Select>
          ),
          key: "category",
        },
      ],
    },
    {
      key: allKeys[2],
      label: filters[2],
      icon: React.createElement(UserOutlined),
      children: [
        {
          label: (
            <Select
              onChange={(selectedAuthor) => {
                setSelectedAuthor(selectedAuthor);
              }}
              style={{ width: "100%" }}
              allowClear={true}
            >
              {authors.map((author, index) => (
                <Select.Option key={index} value={author}>
                  {author}
                </Select.Option>
              ))}
            </Select>
          ),
          key: "author",
        },
      ],
    },
    {
      key: allKeys[3],
      label: filters[3],
      icon: React.createElement(SortAscendingOutlined),
      children: [
        {
          label: (
            <Select
              onChange={(selectedCriteria, index) => {
                if (index === undefined) {
                  setSelectedSort(null);
                } else {
                  setSort(index.key);
                }
              }}
              style={{ width: "100%" }}
              allowClear={true}
            >
              {sortBy.map((sort, index) => (
                <Select.Option key={index} value={sort}>
                  {sort}
                </Select.Option>
              ))}
            </Select>
          ),
          key: "sort",
        },
      ],
    },
  ];
  const onChange = (value) => {
    setCurrentPage(0);
    setPageSize(value);
  };
  const filterPosts = () => {
    loadPosts();
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content>
        <Layout
          style={{
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
              paddingRight: 10,
            }}
            width={300}
            height={500}
          >
            <Menu
              mode="inline"
              style={{
                minHeight: 420,
              }}
              items={items}
              expandIcon={() => null}
              openKeys={allKeys}
              selectable={false}
            />
            <Menu style={{ paddingLeft: 15 }}>
              <Button type="primary" onClick={filterPosts}>
                Osvjezi
              </Button>
            </Menu>
          </Sider>
          {/* <Content style={{}}>
            <Grid sx={{ columnCount: 4 }}>
              {posts.map((post) => (
                <ViewMiniPost id={post.id} key={post.id} />
              ))}
            </Grid>
          </Content> */}
          <Content style={{}}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridGap: "16px",
              }}
            >
              {posts.map((post) => (
                <ViewMiniPost id={post.id} key={post.id} />
              ))}
              {Array(Math.max(0, 4 - posts.length))
                .fill()
                .map((_, i) => (
                  <div key={i} />
                ))}
            </div>
          </Content>
        </Layout>
      </Content>
      <Grid
        container
        item
        sx={{ justifyContent: "center", paddingLeft: "20%" }}
      >
        <Button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={(currentPage + 1) * pageSize >= postsSize}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
        <Select
          defaultValue={allPageSizes[1]}
          placeholder="Velicina straince"
          optionFilterProp="children"
          style={{
            width: 60,
          }}
          onChange={onChange}
          options={allPageSizes.map((size) => ({
            label: size,
            value: size,
          }))}
        />
      </Grid>
    </Layout>
  );
}
