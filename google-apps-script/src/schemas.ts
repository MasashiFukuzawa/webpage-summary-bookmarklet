type Summary = {
  content: string;
  summary: string;
  url: string;
  date: Date;
  rowNum: number;
};

type SummaryData = {
  rows: Summary[];
  summarySheet: GoogleAppsScript.Spreadsheet.Sheet;
  lastColumn: number;
};

type Prompt = {
  instruction: string;
  constraints: string;
  type: 'partial' | 'full';
  rowNum: number;
};

type PromptData = {
  partialPrompt: Prompt;
  fullPrompt: Prompt;
};

type Message = {
  role: string;
  content: string;
};

type Choice = {
  index: number;
  message: Message;
  finish_reason: number;
};

type Usage = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

type ChatgptResponse = {
  id: string;
  object: string;
  created: number;
  choices: Choice[];
  usage: Usage;
};

type ParserAPIResponse = {
  markdown: string;
};
