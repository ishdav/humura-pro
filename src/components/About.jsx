export default function About() {
    return (
        <div className="mt-28">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About our School</h1>
            <p className="text-lg text-slate-500 text-center mt-2 max-w-lg mx-auto">
            Ouschool is a forward-thinking educational institution dedicated to nurturing well-rounded, future-ready students through innovative teaching.
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-20">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div className="py-10 border-b md:py-0 md:border-r md:border-b-0 md:px-10">
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Our Mission</h3>
                        <p className="text-lg text-slate-500">To provide a high-quality education that prepares students for success in the 21st century.</p>
                    </div>
                </div>
                <div className="py-10 border-b md:py-0 lg:border-r md:border-b-0 md:px-10">
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600"> Our Vision</h3>
                        <p className="text-lg text-slate-500">To empower every learner to become a confident, compassionate, equipped with the knowledge.</p>
                    </div>
                </div>
                <div className="py-10 border-b md:py-0 md:border-b-0 md:px-10">
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600"> Our Core Values</h3>
                        <p className="text-sm text-slate-500">We strive for the highest standards in teaching, learning, and personal growth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};