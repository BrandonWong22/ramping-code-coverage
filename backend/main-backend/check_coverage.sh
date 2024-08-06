#!/bin/bash

# Path to the Jacoco report
REPORT_PATH="target/site/jacoco/jacoco.xml"

# Extract the line coverage percentage
LINE_COVERAGE=$(xmllint --xpath "string(//report/counter[@type='LINE']/@covered)" $REPORT_PATH)
TOTAL_LINES=$(xmllint --xpath "string(//report/counter[@type='LINE']/@missed)" $REPORT_PATH)
TOTAL_LINES=$((LINE_COVERAGE + TOTAL_LINES))
COVERAGE_PERCENTAGE=$((LINE_COVERAGE * 100 / TOTAL_LINES))

echo "Line Coverage: $COVERAGE_PERCENTAGE%"

# Check if coverage is at least 70%
if [ $COVERAGE_PERCENTAGE -lt 70 ]; then
  echo "Code coverage is below 70%"
  exit 1
else
  echo "Code coverage is above 70%"
  exit 0
fi