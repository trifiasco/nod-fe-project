import React from 'react';
import { render, fireEvent, screen, waitForDomChange } from '@testing-library/react';
import Form from './form-container';

const elements = [
    'First Name',
    'Last Name',
    'Date of Birth',
    'Email',
    'Address',
    'Phone Number',
    'Gender',
    'Areas of Recommendation'
];

describe('form rendering', () => {
    test('renders form', () => {
        const { getByText } = render(<Form open={true} />);
        const linkElement = getByText(/NOD/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('render all form element', () => {
        const { getByText } = render(<Form open={true} />);
        elements.forEach(element => {
            const linkElement = getByText(element);
            expect(linkElement).toBeInTheDocument();
        });
    });

    test('submit button is rendered as disabled by default', () => {
        const { getByText } = render(<Form open={true} />);
        const linkElement = getByText(/submit/i);

        expect(linkElement.closest('button')).toHaveAttribute('disabled');
    });
});
