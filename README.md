# AI-Native Textbook: Physical AI & Humanoid Robotics

AI-powered textbook generation system with Docusaurus frontend.

## Quick Start

### 1. Setup Environment

```bash
# Install Python dependencies
pip install anthropic markdown-it-py

# Install Node dependencies
cd website && npm install
```

### 2. Set API Key

```bash
export ANTHROPIC_API_KEY="your-key-here"
```

### 3. Generate Chapters

```bash
# Generate all 6 MVP chapters
python scripts/generate_chapters.py

# Or generate single chapter
python scripts/generate_single.py 1
```

### 4. Preview

```bash
cd website
npm run start
```

Open http://localhost:3000/docs/intro

## Project Structure

```
├── agents/content_generator/  # AI generation logic
├── backend/src/              # API & database (optional)
├── website/                  # Docusaurus site
│   └── docs/                # Generated chapters
└── scripts/                 # Generation scripts
```

## Constitution Compliance

- **Word count**: 800-1200 per chapter ✅
- **Reading time**: 5-7 minutes ✅
- **Mobile-first**: Responsive design ✅
- **Free-tier**: Anthropic API ✅

## Commands

```bash
# Generate
python scripts/generate_chapters.py

# Preview
cd website && npm run start

# Build
cd website && npm run build

# Deploy
cd website && npm run deploy
```

## Features

- ✅ 6 MVP chapters on Physical AI & Robotics
- ✅ AI-generated content with validation
- ✅ Word count enforcement (800-1200)
- ✅ Docusaurus integration
- 🚧 Chapter summaries (Phase 4)
- 🚧 Quizzes (Phase 5)
- 🚧 Learning boosters (Phase 6)

**Current Status**: Phase 3 (User Story 1) - MVP chapter generation complete
