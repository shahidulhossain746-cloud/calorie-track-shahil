export interface UserProfile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number;
  weight: number;
  country: string;
  goal: 'lose' | 'maintain' | 'gain';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  targetCalories?: number;
  targetProtein?: number;
  physiquePhotoUri?: string;
  workoutType?: 'home' | 'gym';
  profilePictureUri?: string;
}

export interface MealAnalysis {
  id: string;
  imageUri: string;
  timestamp: Date;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  notes?: string;
}

export interface DailyProgress {
  date: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: MealAnalysis[];
  targetCalories: number;
}

export interface WorkoutExercise {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
  description: string;
}

export interface WorkoutDay {
  day: string;
  focus: string;
  exercises: WorkoutExercise[];
  completed?: boolean;
}

export interface WorkoutPlan {
  id: string;
  type: 'home' | 'gym';
  name: string;
  description: string;
  days: WorkoutDay[];
  createdAt: Date;
}
