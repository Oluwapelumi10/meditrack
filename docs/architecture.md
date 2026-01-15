# MediTrack – System Architecture

## Purpose
MediTrack is a medication reminder application designed for end users to safely and reliably manage their prescribed medications.

The system prioritizes:
- simplicity
- reliability
- clear separation of concerns
- future DevOps readiness

---

## High-Level Components (v1)

- Frontend: User interface for managing medications and reminders
- Backend: API and business logic
- Database: Persistent storage for users and medications
- Notification System: Scheduled medication reminders

---

## Design Principles

- Keep v1 simple and focused
- Avoid premature optimization
- Separate frontend and backend clearly
- Design in a way that supports containerization later
- All decisions must be explainable and documented

---

## Out of Scope (v1)

- Integration with hospitals or NHS systems
- Advanced analytics
- Wearables integration
- AI or prediction features

These may be considered in future versions.

---

## Backend Domains (v1)

### 1) Auth Domain
Purpose: Identify the user securely.
Core responsibilities:
- Register (email + password)
- Login (email + password)
- Basic session/token handling
  Notes:
- Social login (Apple/Google) is out of scope for v1.

### 2) Users Domain
Purpose: Store and manage user profile and preferences.
Core responsibilities:
- Read/update profile (name, email)
- Store notification preferences (reminders on/off, missed dose alerts on/off)
  Notes:
- No NHS/hospital integration in v1.

### 3) Medications Domain
Purpose: CRUD for medications and prescription details.
Core responsibilities:
- Create medication (name, dosage amount, notes)
- Update medication
- Delete medication
- List medications

### 4) Schedules Domain
Purpose: Convert medication instructions into user-selected times.
Core responsibilities:
- Store user-selected times per medication (variable times)
- Support multiple daily doses (e.g., 3 times/day)
- Support custom schedules (user chooses exact times)
  Notes:
- We will not enforce medical correctness. We only store what the user sets.

### 5) Dose Tracking Domain
Purpose: Track whether a scheduled dose was taken, missed, or skipped.
Core responsibilities:
- Mark dose as taken
- Mark dose as skipped
- Mark dose as missed (automatic based on time window)
- Show today's due doses

### 6) Notifications Domain (v1-lite)
Purpose: Provide “what should be notified” data.
Core responsibilities:
- Expose next due dose times (API)
- Expose overdue/missed doses (API)
  Notes:
- Actual push notification delivery is implemented later.
