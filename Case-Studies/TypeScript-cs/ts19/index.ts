import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { APISource } from "./APISource";
import type { NewsSource } from "./NewsSource";
import { RSSFeedSource } from "./RSSFeedSource";
 
// Container.set("NewsSource", new RSSFeedSource());
// const aggregator = Container.get(NewsAggregator);
// aggregator.getLatestArticles(); 

/*
Output:
RSS: Article 1
RSS: Article 2
*/

// Override the NewsSource dependency
// Container.set("NewsSource", new APISource());

// const aggregator2 = Container.get(NewsAggregator);
// aggregator2.getLatestArticles(); // Now uses APISource
/*
Output:
API: Article A
API: Article B
*/

/*
// Only in InversifyJS Does not work in TypeDI
Container.rebind<NewsSource>(TYPES.NewsSource).to(APISource);

const aggregator2 = Container.resolve(NewsAggregator);
aggregator2.getLatestArticles(); // Now uses APISource
*/

class MockSource implements NewsSource {
  async fetchArticles() {
    return ["Mock Article"];
  }
}

Container.set("NewsSource", new MockSource());

const aggregator3 = Container.get(NewsAggregator);
aggregator3.getLatestArticles(); // Now uses APISource
/*
Ouptut:
Mock Article
*/