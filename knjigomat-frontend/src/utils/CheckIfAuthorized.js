import CheckIfAdmin from "./CheckIfAdmin";
import CheckIfUser from "./CheckIfUser";

const CheckIfAuthorized = () => {
  return CheckIfAdmin() || CheckIfUser();
};

export default CheckIfAuthorized;
