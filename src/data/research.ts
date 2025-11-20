export interface Research {
  title: string;
  date: string;
  url?: string;
  description?: string;
}

export const research: Research[] = [
  {
    title: 'Predicting the Result of a Cricket Match by Applying Data Mining Techniques',
    date: '2020',
    description: 'Applied Recursive Feature Elimination, ZeroR, Decision Tree, Random Forest, and XGBoost for cricket match prediction.'
  }
];
