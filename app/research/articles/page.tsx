import { LayoutWrapper } from "@/components/layout-wrapper"
import { researchArticles } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ResearchArticlesPage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Research Articles</h1>

          <div className="space-y-6">
            {researchArticles.map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground text-balance leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  {article.presentedAt && (
                    <p className="text-card-foreground/80">
                      <span className="font-medium">Presented at:</span> {article.presentedAt}
                    </p>
                  )}

                  {article.publishedAt && (
                    <p className="text-card-foreground/80">
                      <span className="font-medium">Published at:</span> {article.publishedAt}
                    </p>
                  )}

                  <div className="flex items-center gap-4 text-sm text-card-foreground/60">
                    <span>{article.date}</span>
                    {article.location && <span>• {article.location}</span>}
                  </div>

                  {article.DOI && (
                    <p className="text-sm text-card-foreground/70">
                      <span className="font-medium">DOI:</span> {article.DOI}
                    </p>
                  )}

                  {article.href && (
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={article.href} target="_blank" rel="noopener noreferrer">
                          View Publication
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
