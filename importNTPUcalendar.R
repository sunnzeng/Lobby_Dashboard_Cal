ntpuEvents <- jsonlite::fromJSON(
  "data/ntpu109-1.json"
)
ntpuEvents$items -> df_ntpuEvents # 行事曆data frame