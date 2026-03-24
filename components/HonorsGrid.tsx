'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface HonorItem {
    id: string;
    title: string;
    imageUrl: string;
    createdAt: string;
}

export default function HonorsGrid({ honors }: { honors: HonorItem[] }) {
    const [selectedImage, setSelectedImage] = useState<HonorItem | null>(null);

    if (!honors || honors.length === 0) {
        return null;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {honors.map((honor) => (
                    <div 
                        key={honor.id} 
                        className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        onClick={() => setSelectedImage(honor)}
                    >
                        <div className="aspect-[4/3] w-full relative mb-6 bg-white/5 flex items-center justify-center rounded-xl overflow-hidden group-hover:bg-white/10 transition-colors">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={honor.imageUrl}
                                alt={honor.title}
                                className="max-w-full max-h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-white text-center line-clamp-2 group-hover:text-blue-400 transition-colors">
                            {honor.title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Lightbox / Modal Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    
                    <div 
                        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center cursor-default"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={selectedImage.imageUrl} 
                            alt={selectedImage.title}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                        <p className="text-white text-xl font-bold mt-6 text-center">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
