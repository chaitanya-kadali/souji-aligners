import { FC } from "react";

const WhatsAligners: FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          What are Clear Aligners and How Do They Work?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Clear aligners are transparent, custom-made trays that gently shift your teeth into proper alignment over time. They offer a convenient and comfortable alternative to traditional metal braces, suitable for individuals aged 10 to 50.
        </p>

        <div className="space-y-8">
          <div className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-sky-700 flex items-center gap-2">
              🦷 Discreet & Comfortable
            </h3>
            <p className="text-gray-600 mt-2">
              These invisible aligners are crafted precisely using a 3D digital scan of your teeth, ensuring a perfect and snug fit.
            </p>
          </div>

          <div className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-sky-700 flex items-center gap-2">
              🦷 Step-by-Step Progress
            </h3>
            <p className="text-gray-600 mt-2">
              You’ll receive a series of aligner sets tailored to your personalized treatment plan. Each set works gradually to reposition your teeth closer to the ideal alignment. Aligners must be worn 20-22 hours daily for the best results.
            </p>
          </div>

          <div className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-sky-700 flex items-center gap-2">
              🦷 Personalized Treatment Timeline
            </h3>
            <p className="text-gray-600 mt-2">
              The length of treatment varies from person to person, depending on the severity of the dental issue. On average, the journey to your dream smile can take anywhere between 6 months to 2 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAligners;
