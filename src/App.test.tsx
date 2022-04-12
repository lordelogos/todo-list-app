import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect"
import App from './App';

// to check the date component
describe('When rendered', () => {
    it('date component should be on screen and show current date', () => {
        render(<App />);
        const date = new Date(Date.now())
        expect(screen.getByTestId('date-component')).toHaveTextContent(`Today, ${date.toDateString()}`)
    })
 })

// to check the task counter and filter component
describe('When rendered', () => {
    it('component should be on screen and show number of tasks', () => {
        render(<App />);
        expect(screen.getByTestId('counter-filter-component')).toHaveTextContent(`Showing 0 tasks`)
    })
 })

 describe('On filter click', () => {
    it('component should be on screen and show filtering and number of tasks', () => {
        const app = render(<App />);
        fireEvent.click(screen.getByTestId('green-filter-btn'));
        expect(screen.getByTestId('counter-filter-component')).toHaveTextContent(`Filtering and showing 0 tasks`)
    })
 })

 // add a todo and it will show up
 describe('When rendered', () => {
    it('input should be on screen and active', () => {
        const app = render(<App />);
        const input:HTMLInputElement = screen.getByTestId('todo-create-component');
        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: 'Todo 1'}})
        expect(input.value).toBe('Todo 1')
    })
    it('input on valued entered and "Enter" todo should be created', () => {
        // setup
        const handleSubmit = jest.fn()
        const app = render(<App />);
        const input:HTMLInputElement = screen.getByTestId('todo-create-component');
        const form:HTMLFormElement = screen.getByTestId('form-component');
        const todolist:HTMLDivElement= screen.getByTestId('todolist-component')

        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: 'Todo 1'}})
        expect(input.value).toBe('Todo 1')
        fireEvent.submit(form)
        expect(handleSubmit).toHaveBeenCalled;
        expect(todolist).toHaveTextContent('Todo 1')
    })
 })

 // mark checkbox and get it checked
 describe('When rendered', () => {
    it('todo should be created, status should be pending, then completed after click', () => {
        // setup
        const handleSubmit = jest.fn()
        const app = render(<App />);
        const input:HTMLInputElement = screen.getByTestId('todo-create-component');
        const form:HTMLFormElement = screen.getByTestId('form-component');
        const todolist:HTMLDivElement= screen.getByTestId('todolist-component')

        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: 'Todo 1'}})
        expect(input.value).toBe('Todo 1')
        fireEvent.submit(form)
        expect(handleSubmit).toHaveBeenCalled;


        const todoitem:HTMLDivElement = screen.getByTestId('todo-item')
        const checkbox:HTMLInputElement = screen.getByTestId('checkbox-component')
        expect(todoitem).toBeInTheDocument;
        expect(todoitem).toHaveTextContent('Todo 1')
        expect(checkbox.checked).toEqual(false)
        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(true)
    })
 })

