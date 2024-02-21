import { IProject } from "@/utils/interfaces";
import db from "./db.json";

const database: IProject[] = db;

export const getProjects = () => {
  return database.sort((a, b) => a.id - b.id);
};
export const getProject = (id: number) => {
  return database.find((project) => project.id === id);
};

export default database;
