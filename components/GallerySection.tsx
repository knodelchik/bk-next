"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
    {
        src: "/gal1.jpg",
        caption: "Більярдний стіл у клубі",
    },
    {
        src: "/gal2.jpg",
        caption: "Гра в пул",
    },
    {
        src: "/gal3.jpg",
        caption: "Кулі на зеленому сукні",
    },
    {
        src: "/gal4.jpg",
        caption: "Снукер",
    },
    {
        src: "/gal5.jpg",
        caption: "Кий та куля",
    },
    {
        src: "/gal6.jpg",
        caption: "Компанія друзів у барі",
    },
    {
        src: "/gal7.jpg",
        caption: "Атмосфера більярдного клубу",
    },
];

export default function GallerySection() {
    const [index, setIndex] = useState(-1);

    return (
        <section
            id="gallery"
            className="w-full bg-gradient-to-b from-[#3B332B] via-[#231e19] to-[#2b251f] py-16"
        >
            <div className="container mx-auto px-4">
                {/* Заголовок */}
                <div className="flex items-center justify-center gap-6 mb-12 w-full container">
                    <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
                    <h2
                        className="text-4xl font-bold text-[#c5c18d] text-center whitespace-nowrap"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        Галерея
                    </h2>
                    <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
                </div>

                {/* Ряд 1 (4 фото) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {photos.slice(0, 4).map((photo, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group border-2 border-[#5a532c]/40"
                            onClick={() => setIndex(i)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.caption}
                                className="w-full h-64 object-cover group-hover:scale-105 transition "
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                                {photo.caption}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ряд 2 (3 фото) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.slice(4).map((photo, i) => (
                        <div
                            key={i + 4}
                            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group border-2 border-[#5a532c]/40"
                            onClick={() => setIndex(i + 4)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.caption}
                                className="w-full h-64 object-cover group-hover:scale-105 transition"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                                {photo.caption}
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    plugins={[Counter, Thumbnails]}
                    thumbnails={{
                        position: "bottom",
                        width: 80,
                        height: 50,
                        border: 1,
                        borderColor: "#c5c18d/40",
                        borderRadius: 6,
                        padding: 2,
                        gap: 6,
                        imageFit: "cover",
                        vignette: true,
                    }}
                    counter={{ container: { style: { top: 0, bottom: 'unset' } } }}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    animation={{ fade: 450, swipe: 500 }}
                    controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
                    slides={photos.map((p) => ({ src: p.src, description: p.caption }))}
                />

            </div>
        </section>
    );
}
