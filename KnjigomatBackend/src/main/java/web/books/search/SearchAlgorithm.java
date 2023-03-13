package web.books.search;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class SearchAlgorithm {

    public static int calculateLevenshteinDistance(String s1, String s2) {
        int[][] distance = new int[s1.length() + 1][s2.length() + 1];
        for (int i = 0; i <= s1.length(); i++) {
            distance[i][0] = i;
        }
        for (int j = 1; j <= s2.length(); j++) {
            distance[0][j] = j;
        }
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                int cost = s1.charAt(i - 1) == s2.charAt(j - 1) ? 0 : 1;
                distance[i][j] = Math.min(Math.min(distance[i - 1][j] + 1, distance[i][j - 1] + 1), distance[i - 1][j - 1] + cost);
            }
        }
        return distance[s1.length()][s2.length()];
    }

    public static List<String> tokenizeString(String s) {
        List<String> tokens = new ArrayList<>();
        StringTokenizer tokenizer = new StringTokenizer(s);
        while (tokenizer.hasMoreTokens()) {
            tokens.add(tokenizer.nextToken());
        }
        return tokens;
    }

    public static boolean isSimilarToAnyToken(String s, String query, int maxDistance) {
        List<String> tokens = tokenizeString(s);
        for (String token : tokens) {
            if (calculateLevenshteinDistance(token, query) <= maxDistance) {
                return true;
            } else if (s.contains(query)) {
                return true;
            }
        }
        return false;
    }
}
