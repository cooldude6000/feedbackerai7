"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RainbowButton } from './ui/rainbow-button';

interface SummarizeButtonProps {
    projectId: string;
}

const SummarizeButton: React.FC<SummarizeButtonProps> = ({ projectId }) => {
    const [summary, setSummary] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const formatSummary = (text: string) => {
        const sections = text.split('**').filter(Boolean);

        return sections.map((section, index) => {
            if (section.endsWith(':')) {
                return (
                    <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
                        {section.replace(':', '')}
                    </h3>
                );
            } else {
                const points = section.split('***').filter(Boolean);
                if (points.length > 1) {
                    return (
                        <div key={index} className="ml-4 mb-4">
                            {points.map((point, pointIndex) => {
                                const [title, description] = point.split(':').map(p => p.trim());
                                return (
                                    <div key={pointIndex} className="mb-3">
                                        <p className="font-medium text-gray-700">
                                            {title}:
                                            <span className="font-normal ml-1">{description}</span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }

                if (section.includes('1.')) {
                    const points = section.split(/(\d+\.\s)/).filter(Boolean);
                    return (
                        <ol key={index} className="list-decimal ml-5 mb-4 space-y-3">
                            {points.map((point, pointIndex) => {
                                if (point.match(/^\d+\.\s$/)) {
                                    return null;
                                }
                                return (
                                    <li key={pointIndex} className="text-gray-600 pl-1 leading-relaxed">
                                        {point.trim()}
                                    </li>
                                );
                            })}
                        </ol>
                    );
                }

                return (
                    <p key={index} className="text-gray-600 mb-4">
                        {section.trim()}
                    </p>
                );
            }
        });
    };

    const handleSummarize = async () => {
        try {
            setIsLoading(true);
            setError('');

            const response = await fetch('/api/reviews/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ projectId }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch summary');
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setSummary(data.summary);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-6">
            <RainbowButton
                onClick={handleSummarize}
                disabled={isLoading}
                className="mb-4"
            >
                {isLoading ? 'Generating Summary...' : 'Click here to summarize Feedback using AI'}
            </RainbowButton>

            {error && (
                <div className="text-red-500 mb-4">
                    {error}
                </div>
            )}

            {summary && (
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Feedback Analysis
                    </h2>
                    <div className="space-y-2">
                        {formatSummary(summary)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SummarizeButton;
