import { Service } from "typedi";
import type { NewsSource } from "./NewsSource";

@Service()
export class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["API: Article A", "API: Article B"];
  }
}
