# Interviewer

An AI-powered live coding interview simulator built with Next.js and React. Practice coding interviews with AI feedback and automated grading.

## What It Does

Interviewer simulates a realistic coding interview experience where:

- **AI generates coding problems** based on your selected difficulty level (Easy, Medium, Hard)
- **Real-time code editing** with Monaco Editor supporting TypeScript and JavaScript
- **Timed interviews** with configurable durations (10, 20, or 30 minutes)
- **Automated testing** with predefined test cases
- **AI-powered grading** that evaluates your solution's correctness, time/space complexity, and provides feedback
- **Interview results analysis** with performance metrics and improvement suggestions

## Features

- 🤖 **AI-Powered**: Uses Google AI SDK to generate problems and grade solutions
- ⏱️ **Timed Practice**: Configurable interview durations to simulate real conditions
- 💻 **Code Editor**: Monaco Editor with TypeScript/JavaScript support and syntax highlighting
- 📊 **Detailed Feedback**: Get complexity analysis and improvement suggestions
- 🎯 **Difficulty Levels**: Easy, Medium, and Hard problems to match your skill level

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor (VS Code editor)
- **AI Integration**: Google AI SDK (Gemini)
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page with settings
│   ├── live-coding-interview/    # Interview session page
│   ├── results/                  # Results and feedback page
│   ├── layout.tsx               # Root layout with theme provider
│   └── globals.css              # Global styles and CSS variables
├── components/                   # React components
│   ├── home/                    # Home page components
│   ├── live-coding-interview/   # Interview session components
│   ├── results/                 # Results page components
│   ├── monaco/                  # Monaco editor components
│   └── ui/                      # Shared UI components (shadcn/ui)
├── stores/                      # Zustand state stores
│   ├── interview.ts             # Main interview state and logic
│   ├── graded-solution.ts       # Grading results state
│   ├── settings-modal.ts        # Settings modal state
│   └── api-key.ts              # API key management
├── lib/                         # Utility functions and configurations
│   ├── ai.ts                    # AI integration and prompt engineering
│   ├── types.ts                 # TypeScript type definitions
│   └── utils.ts                 # Utility functions and helpers
└── public/                      # Static assets
```

### Key Components

- **Interview Store** (`src/stores/interview.ts`): Central state management for interview sessions
- **AI Integration** (`src/lib/ai.ts`): Handles problem generation and solution grading using Google AI
- **Monaco Editor**: Integrated VS Code editor for coding with TypeScript/JavaScript support
- **Real-time Testing**: Execute test cases against user solutions during the interview

## Getting Started

### Prerequisites

- Node.js 18+
- Google AI API key (Gemini)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd interviewer
```

2. Install dependencies:

```bash
npm install
```

3. Set up your Google AI API key:

   - Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Enter it in the settings modal when you first run the app

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Usage

1. **Configure Settings**: Set your difficulty preference and interview duration
2. **Start Interview**: Click "Start Interview" to generate a coding problem
3. **Code Your Solution**: Write your solution in the Monaco editor
4. **Submit**: Submit your solution when ready or when time expires
5. **Review Results**: Get detailed feedback on your solution's performance

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

The app uses Google AI SDK which requires an API key. You can configure this through the settings modal in the UI - no environment variables needed.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

MIT license
