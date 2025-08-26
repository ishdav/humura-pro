import SectionTitle from "../components/SectionTitle";

export default function FeaturesSection() {
    return (
        <>
            <SectionTitle  text2=" News & Events" />

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Feedback analyser</h3>
                    <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4">Read More</button>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Inama Yababyeyi  </h3>
                    <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4">Read More</button>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Gukusanya Amafaranga Yibikorwa Remezo</h3>
                    <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4">Read More</button>
                </div>
            </div>
        </>
    );
}