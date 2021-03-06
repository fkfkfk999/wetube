import routes from "../routes";

// golbal
export const getJoin = (req, res) =>
  res.render("user/join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  // es6 방식으로 req.body의 데이터를 받아온다.
  const {
    body: { name, email, password, password2 }
  } = req;
  // 두 비민번호가 일치하지 않을 경우
  if (password !== password2) {
    res.status(400);
    res.render("user/join", { pageTitle: "Join" });
  } else {
    // To Do : 회원가입 로직 추가
    // To Do : 로그인 로직 추가
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) =>
  res.render("user/login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  // To DO : 로그아웃 로직 추가
  res.redirect(routes.home);
};
// user
export const userDetail = (req, res) =>
  res.render("user/user_detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("user/edit_profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("user/change_password", { pageTitle: "Change Password" });
