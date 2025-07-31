import { Zap, Calendar, MapPin } from "lucide-react";

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beyond Code</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Applying technical skills to real-world engineering challenges and team leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Electrical Software Lead</h3>
                    <p className="font-medium text-primary mb-2">Baja SAE</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Sep 2023 – May 2024
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Kingston, ON
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Led development of an Arduino-based data acquisition system to monitor and relay real-time vehicle metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Created embedded C/C++ firmware for microcontrollers to process and transmit telemetry data with minimal latency
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;