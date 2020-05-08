import * as database from "./database";

export const greet = () => {
    const name = database.people[0];
    return `Hello ${name}!`;
}