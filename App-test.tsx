import React from 'react';
import { TestComponent } from './components/TestComponent';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TestComponent />
      <div className="p-8">
        <h1 className="text-4xl font-montserrat-bold text-navy mb-4">
          Frame & Flight
        </h1>
        <p className="text-lg font-montserrat-regular text-navy/80">
          Elevating Real Estate. Capturing the Future.
        </p>
      </div>
    </div>
  );
}