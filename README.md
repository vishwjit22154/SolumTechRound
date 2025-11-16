# Technical Round - Coding Assessment

This repository contains solutions to three programming problems organized into separate folders.

## 📁 Project Structure

```
techRound/
├── A/                          # Problem A: Mystic Waves
│   ├── mystic_waves.py        # Python solution
│   └── README.md              # Problem description & explanation
│
├── B/                          # Problem B: CargoCraft Fleet
│   ├── cargocraft_fleet.py    # Python solution
│   └── README.md              # Problem description & explanation
│
└── C/                          # Problem C: Login Page
    ├── index.html             # Single-file solution
    └── README.md              # Setup & usage instructions
```

## 🚀 Quick Start

### Problem A: Mystic Waves
```bash
cd A
python mystic_waves.py
# Enter input as specified in the problem
```

### Problem B: CargoCraft Fleet
```bash
cd B
python cargocraft_fleet.py
# Enter input as specified in the problem
```

### Problem C: Login Page (HTML/CSS/JS)
```bash
cd C
open index.html
# Or just double-click index.html
```

## 📝 Problem Summaries

### A. Mystic Waves
**Language:** Python  
**Type:** Mathematical problem  
**Description:** Calculate the sum of alternating energy waves (x, -x, x, -x, ...)

**Key Insight:** 
- If n is odd → sum = x
- If n is even → sum = 0

### B. CargoCraft Fleet
**Language:** Python  
**Type:** Optimization problem  
**Description:** Find min/max number of crafts given total propulsion units (Type A: 4 units, Type B: 6 units)

**Key Insight:**
- Minimize crafts → use more Type B (6 units each)
- Maximize crafts → use more Type A (4 units each)
- Only even numbers ≥ 4 are possible (except 2)

### C. Login Page
**Language:** HTML/CSS/JavaScript (Single File)  
**Type:** Frontend web application  
**Description:** Responsive login page with comprehensive validation

**Features:**
- Email validation (must exist in valid list)
- Password validation (8-16 chars, uppercase, lowercase, number, symbol)
- Welcome screen on successful login
- Logout functionality
- Modern, responsive UI
- **No dependencies or build tools needed!**

## 🧪 Testing

### Problems A & B
Test files are included with sample inputs:
```bash
# Problem A
cd A
python mystic_waves.py < test_input.txt

# Problem B
cd B
python cargocraft_fleet.py < test_input.txt
```

### Problem C
Just open the HTML file in a browser - demo credentials are displayed on the page:
- `test@example.com` / `Test@1234`
- `admin@example.com` / `Admin@123`
- `user@example.com` / `User@Pass1`

## 💻 Language Requirements

- **Problem A:** Python ✅
- **Problem B:** Python ✅
- **Problem C:** HTML/CSS/JavaScript ✅

## 🎯 Key Features

### Code Quality
- Clean, readable code with comments
- Proper error handling
- Efficient algorithms (O(1) time complexity for A & B)

### Documentation
- Comprehensive README files for each problem
- Code comments explaining logic
- Example inputs and outputs

### Frontend (Problem C)
- Modern, gradient-based design
- Smooth animations and transitions
- Fully responsive (mobile & desktop)
- Real-time validation feedback
- Accessible and semantic HTML

## 📦 Dependencies

### Problem A
- Python 3.x (no external dependencies)

### Problem B
- Python 3.x (no external dependencies)

### Problem C
- Any modern web browser
- No dependencies required!

## 🔧 Development

All solutions are production-ready and include:
- Input validation
- Edge case handling
- Clean code architecture
- Documentation

## 📄 License

This is a technical assessment project.

## 👤 Author

Submission for technical round coding assessment.

---

**Note:** Each folder (A, B, C) contains its own detailed README with problem descriptions, solution approaches, and usage instructions.

