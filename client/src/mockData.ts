export const mockResponse = {
  bugs: [
    {
      id: "B001",
      type: "Logic Error",
      severity: "critical",
      description: "Password parameter is never validated.",
      recommendation: "Compare password against stored hash before returning true."
    },
    {
      id: "B002",
      type: "Missing Return",
      severity: "high",
      description: "Function returns undefined for non-admin users.",
      recommendation: "Add explicit return false statement."
    },
    {
      id: "B003",
      type: "Missing Return",
      severity: "high",
      description: "Function returns undefined for non-admin users.",
      recommendation: "Add explicit return false statement."
    },
    {
      id: "B004",
      type: "Missing Return",
      severity: "high",
      description: "Function returns undefined for non-admin users.",
      recommendation: "Add explicit return false statement."
    }
  ],
  security: [
    {
      id: "S001",
      type: "SQL Injection",
      severity: "critical",
      description: "User input concatenated directly into SQL query.",
      recommendation: "Use parameterized queries."
    }
  ],
  suggestions: [
    {
      id: "SG001",
      category: "Best Practice",
      description: "Use strict equality operator === instead of ==.",
      recommendation: "Replace == with === throughout.",
      priority: "medium"
    }
  ]
}