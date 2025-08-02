import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useEventContext } from "../context/EventContext";
import { v4 as uuidv4 } from "uuid";
import bgImage from "../assets/bg_event3.png";
import { useNavigate } from "react-router-dom";


export const EventForm = () => {
    const { addEvent } = useEventContext();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const [activeSteps, setActiveSteps] = useState([false, false, false, false, false, false, false]);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageData, setImageData] = useState(null);

    const title = watch("title");
    const description = watch("description");
    const venue = watch("venue");
    const date = watch("date");
    const category = watch("category");
    const type = watch("type")
    const image = watch("image")

    useEffect(() => {
        const updatedSteps = [
            !!title?.trim(),
            !!description?.trim(),
            !!venue?.trim(),
            !!date?.trim(),
            !!category?.trim(),
            !!type?.trim(),
            !!image?.trim(),
        ];
        setActiveSteps(updatedSteps);
    }, [title, description, venue, date, category, type, image]);

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageData(reader.result);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const navigate = useNavigate();


    const onSubmit = (data) => {
        addEvent({
            id: uuidv4(),
            ...data,
            image: imageData || "",
        });

        reset();
        setImagePreview(null);
        setImageData(null);

        navigate("/view-event");
    };

    return (
        <div className="relative min-h-screen pt-24 px-4 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage: `url(${bgImage})`
                    , transform: 'scaleY(-1)',

                }}
            ></div>


            <div className="relative z-10 pt-4">
                <div className="max-w-4xl mx-auto mb-4">
                    <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-2 sm:gap-x-4">                        {["Title", "Description", "Venue", "Date", "Category", "Type", "Image"].map((label, index) => (
                        <div key={index} className="flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition 
                                        ${activeSteps[index]
                                        ? "bg-teal-600 text-white"
                                        : "bg-gray-50 text-gray-500"
                                    }`}
                            >
                                {index + 1}
                            </div>
                            {index < 6 && (
                                <div className="w-8 h-1 bg-gray-300 mx-1 rounded-full"></div>
                            )}
                        </div>
                    ))}
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-4xl mx-auto p-8 mb-4 bg-white rounded shadow"
                >

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
                            Event Title
                        </label>
                        <input
                            id="title"
                            {...register("title", { required: "Title is required" })}
                            className="w-full border border-gray-300 p-2 rounded"
                            type="text"
                        />
                        {errors.title && (
                            <p className="text-red-600 mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register("description", { required: "Description is required" })}
                            className="w-full border border-gray-300 p-2 rounded"
                            rows={2}
                        />
                        {errors.description && (
                            <p className="text-red-600 mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="mb-4 md:w-1/2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="venue">
                                Venue
                            </label>
                            <input
                                id="venue"
                                {...register("venue", { required: "Venue is required" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                type="text"
                            />
                            {errors.venue && (
                                <p className="text-red-600 mt-1">{errors.venue.message}</p>
                            )}
                        </div>

                        <div className="mb-4 md:w-1/2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">
                                Event Date
                            </label>
                            <input
                                id="date"
                                {...register("date", { required: "Date is required" })}
                                className="w-full border border-gray-300 text-gray-500 p-2 rounded"
                                type="date"
                            />
                            {errors.date && (
                                <p className="text-red-600 mt-1">{errors.date.message}</p>
                            )}
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="mb-4 md:w-1/2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
                                Category
                            </label>
                            <select
                                id="category"
                                {...register("category", { required: "Category is required" })}
                                className="w-full border border-gray-300 p-2 rounded"
                            >
                                <option value="">Select category</option>
                                <option value="conference">Conference</option>
                                <option value="workshop">Workshop</option>
                                <option value="webinar">Webinar</option>
                                <option value="seminar">Seminar</option>
                                <option value="festival">Festival</option>
                            </select>
                            {errors.category && (
                                <p className="text-red-600 mt-1">{errors.category.message}</p>
                            )}
                        </div>


                        <div className="mb-4 md:w-1/2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="type">
                                Event Type
                            </label>
                            <select
                                id="type"
                                {...register("type", { required: "Event type is required" })}
                                className="w-full border border-gray-300 p-2 rounded"
                            >
                                <option value="">Select type</option>
                                <option value="online">Online</option>
                                <option value="in-person">In-Person</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                            {errors.type && (
                                <p className="text-red-600 mt-1">{errors.type.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                            Event Image
                        </label>
                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={onImageChange}
                            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0 file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
                        />
                        {imagePreview && (
                            <div className="mt-3 border rounded overflow-hidden shadow-sm">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="h-48 w-full object-cover"
                                />
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className="bg-primary-dull text-white px-12 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add Event
                    </button>
                </form>
            </div>
        </div>
    );
};
