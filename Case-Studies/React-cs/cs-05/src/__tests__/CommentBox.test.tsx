import { test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommentBox from "../components/CommentBox";

test("renders input and post button", () => {
  render(<CommentBox onPost={() => {}} />);

  expect(screen.getByPlaceholderText("Write a comment")).toBeInTheDocument();
  expect(screen.getByText("Post")).toBeInTheDocument();
});

test("calls onPost with input value when clicked", () => {
  const mockPost = vi.fn();

  render(<CommentBox onPost={mockPost} />);

  const input = screen.getByPlaceholderText("Write a comment");
  fireEvent.change(input, { target: { value: "Hello World" } });

  fireEvent.click(screen.getByText("Post"));

  expect(mockPost).toHaveBeenCalledWith("Hello World");
});

test("does not call onPost if input is empty", () => {
  const mockPost = vi.fn();

  render(<CommentBox onPost={mockPost} />);

  fireEvent.click(screen.getByText("Post"));

  expect(mockPost).not.toHaveBeenCalled();
});

test("clears input after posting", () => {
  const mockPost = vi.fn();

  render(<CommentBox onPost={mockPost} />);

  const input = screen.getByPlaceholderText("Write a comment") as HTMLInputElement;

  fireEvent.change(input, { target: { value: "Test Comment" } });
  fireEvent.click(screen.getByText("Post"));

  expect(input.value).toBe("");
});