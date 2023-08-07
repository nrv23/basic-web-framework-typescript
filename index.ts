import { UserEdit } from './views/UserEdit';
import { User } from './models/User';


const root = document.getElementById("root");

if (root) {
    const user = User.buildUser({ name: "NAME", age: 20 });
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    console.log(userEdit);
} else {
    throw new Error("root element not found");
}