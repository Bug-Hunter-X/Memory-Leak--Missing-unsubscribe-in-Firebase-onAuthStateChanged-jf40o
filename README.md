# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` method: forgetting to unsubscribe.  The included `firebaseAuthBug.js` file showcases this error, while `firebaseAuthSolution.js` provides the corrected implementation.

## Problem

Failing to unsubscribe from `onAuthStateChanged` results in a persistent listener, leading to memory leaks and potential interference with other authentication-related processes.  This is particularly problematic in applications with long lifecycles.

## Solution

The solution involves using the returned unsubscribe function to detach the listener when it's no longer needed (e.g., when the component unmounts in a React app or when the application closes).