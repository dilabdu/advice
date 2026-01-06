import { loader } from "./loader.js";
export async function request(url) {
  try {
    loader(true);
    const req = await fetch(url); // response object doim keladi

    if (!req.ok) {
      throw new Error("Something went wrong !");
    }
    const data = await req.json();
    return data;
  } catch (err) {
    console.log(err.message);
  } finally {
    loader(false);
  }
}
