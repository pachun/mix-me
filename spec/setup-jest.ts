// https://github.com/testing-library/jest-native#usage
import "@testing-library/jest-native/extend-expect"

// https://github.com/th3rdwave/react-native-safe-area-context#testing
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock"
jest.mock("react-native-safe-area-context", () => mockSafeAreaContext)
