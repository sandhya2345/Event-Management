import React from "react";
import { Download, FileText } from "lucide-react";

const Content = () => {
    const contents = [
        {
            day: "Day 1",
            title: "Python Basics",
            description:
                "Learn the fundamentals of Python, including variables, data types, operators, input and output, and basic programming concepts.",
            file: "/Day_1_Python_Basics.ipynb",
        },
        {
            day: "Day 2",
            title: "Python Functions and Flow Control",
            description:
                "Learn how to create and use functions, along with conditional statements, loops, and flow control techniques in Python.",
            file: "/Day_2_Python_Functions_Flow_Control_Loops.ipynb",
        },
        {
            day: "Day 3",
            title: "Python Data Structures",
            description:
                "Explore Python's core data structures, including lists, tuples, dictionaries, sets, and techniques for managing and organizing data.",
            file: "/Day_3_Python_Data_Structure.ipynb",
        },
        {
            day: "Day 4",
            title: "Working with LLM",
            description:
                "Learn the fundamentals of Large Language Models and how to interact with and integrate LLMs into AI applications.",
            file: "/Day_4_Working_with_LLM (1).ipynb",
        },
        {
            day: "Day 5",
            title: "Prompt Engineering",
            description:
                "Learn how to design effective prompts and communicate with Large Language Models to generate accurate, useful, and relevant responses.",
            file: "/Day_5_Prompt_Engineering.ipynb",
        },
        {
            day: "Day 6",
            title: "Vector Store",
            description:
                "Learn about embeddings, vector databases, similarity search, and how vector stores can be used to build intelligent recommendation systems.",
            file: "/Day6_vector_Store_Movie_Recommendation.ipynb",
        },
        {
            day: "Day 7",
            title: "RAG Based Chatbot",
            description:
                "Build a Retrieval-Augmented Generation chatbot that combines document retrieval with Large Language Models to provide context-aware responses.",
            file: "/Day_7_Rag_based_Chatbot.ipynb",
        },
    ];

    return (
        <div className="hidden min-h-screen bg-primary pt-32 pb-16 px-6">

            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-12">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-50">
                    Course Content
                </h1>

                <p className="mt-4 text-gray-100 text-lg">
                    Access and download the learning materials from Day 1 to Day 10.
                </p>

            </div>

            {/* Content Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {contents.map((content, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100 flex flex-col justify-between"
                    >

                        {/* Top Section */}
                        <div>

                            {/* Day */}
                            <div className="flex items-center justify-between mb-5">

                                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {content.day}
                                </span>

                                <FileText className="w-7 h-7 text-primary-dull" />

                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-800">
                                {content.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {content.description}
                            </p>

                        </div>

                        {/* Download Button */}
                        <a
                            href={content.file}
                            download
                            className="mt-6 flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary-dull transition duration-300"
                        >
                            <Download className="w-5 h-5" />
                            Download
                        </a>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Content;