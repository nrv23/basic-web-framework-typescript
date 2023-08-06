import { UserForm } from "./views/UserForm";
import { User } from './models/User';
import { IUserProps } from './interfaces/IUser';

const root = document.getElementById("root");

if (root) {
    const user = User.buildUser({ name: "NAME", age: 20 });
    const userForm = new UserForm(root, user);
    userForm.render();
} else {
    throw new Error("root element not found");
}