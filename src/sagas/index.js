import { fork } from "redux-saga/effects";
import login from "./login";


export default function* root() {
 yield fork(login)
}
