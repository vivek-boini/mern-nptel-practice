import { Service, Inject } from "typedi";
import type { NewsSource } from "./NewsSource";

@Service()
export class NewsAggregator {
  constructor(
    @Inject("NewsSource") private source: NewsSource
  ) {}

  async getLatestArticles(): Promise<void> {
    const articles = await this.source.fetchArticles();
    articles.forEach(article => console.log(article));
  }
}
