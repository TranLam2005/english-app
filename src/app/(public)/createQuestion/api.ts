import { gql } from "@apollo/client";


export const createQuestion = gql`
    mutation AddExercise($exercise: ExerciseInput!) {
        addExercise(exercise: $exercise)
    }
`
export interface Exercise {
    question: string;
    answer: string;
    author: number;
}