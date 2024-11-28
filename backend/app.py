from flask import Flask, request, jsonify
import wikipediaapi
import random

app = Flask(__name__)

def generate_quiz(topic, num_questions=10):
    # Initialize the Wikipedia API
    wiki = wikipediaapi.Wikipedia('en')

    # Retrieve the page content
    page = wiki.page(topic)
    if not page.exists():
        return f"Topic '{topic}' not found on Wikipedia."

    # Split content into sentences
    content = page.text
    sentences = [sentence.strip() for sentence in content.split('.') if len(sentence.split()) > 5]

    # Select sentences to generate questions
    selected_sentences = random.sample(sentences, min(len(sentences), num_questions))
    quiz_questions = []

    for sentence in selected_sentences:
        # Extract keywords for the question
        words = sentence.split()
        if len(words) < 5:
            continue
        correct_answer = random.choice(words)
        incorrect_answers = generate_distractors(correct_answer, words)

        if incorrect_answers:
            question = {
                "question": sentence.replace(correct_answer, "_____"),
                "options": random.sample([correct_answer] + incorrect_answers, 4),
                "correct": correct_answer
            }
            quiz_questions.append(question)

    return quiz_questions

def generate_distractors(correct_answer, word_pool):
    # Generate distractors (words that are similar but incorrect)
    distractors = [word for word in word_pool if word.lower() != correct_answer.lower()]
    random.shuffle(distractors)
    return distractors[:3]  # Return 3 distractors

# Example usage
topic = "Python (programming language)"
quiz = generate_quiz(topic)

if isinstance(quiz, list):
    for idx, q in enumerate(quiz):
        print(f"Q{idx + 1}: {q['question']}")
        for i, option in enumerate(q['options']):
            print(f"  {chr(65+i)}. {option}")
        print(f"Answer: {q['correct']}\n")
else:
    print(quiz)