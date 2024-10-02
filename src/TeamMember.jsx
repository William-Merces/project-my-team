import React from 'react';

function TeamMember({ name, role, image, imagesLoaded }) {
    return (
        <div className="relative">
            <div className="relative pb-[125%]">
                {imagesLoaded ? (
                    <img
                        src={image}
                        alt={name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder.png';
                        }}
                    />
                ) : (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <p className="absolute top-0 right-0 transform -translate-y-full translate-x-full origin-bottom-left rotate-90 mt-2 mr-[-1rem] text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {role}
                </p>
            </div>
            <h3 className="text-sm font-semibold mt-2">{name}</h3>
        </div>
    );
}

export default TeamMember;