// 


//new content

import React from "react";
import { Download } from "lucide-react";

const Content = () => {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-16 px-6">

            <div className="max-w-6xl mx-auto text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-50">
                    Course Content
                </h1>

                <p className="mt-4 text-gray-100 text-lg">
                    Download the course material below.
                </p>

                <a
                    href="/article.txt"
                    download
                    className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                    <Download className="w-5 h-5" />
                   Prompt Dataset
                </a>

            </div>

        </div>
    );
};

export default Content;