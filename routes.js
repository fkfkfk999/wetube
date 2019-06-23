//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users
const USERS = "/users";
//  :id로 입력하면 변하는 값이라는걸 인식한다.
const USERS_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change_password";

//Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  users_detail: USERS_DETAIL,
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videos_detail: VIDEOS_DETAIL,
  edit_video: EDIT_VIDEO,
  delete_video: DELETE_VIDEO
};

export default routes;