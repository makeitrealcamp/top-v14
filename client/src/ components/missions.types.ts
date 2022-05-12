type PayloadOrbitParams = {
  apoapsis_km: Number;
  arg_of_pericenter: Number;
  eccentricity: Number;
  epoch: Date;
  inclination_deg: Number;
  lifespan_years: Number;
  longitude: Number;
  mean_anomaly: Number;
  mean_motion: Number;
  periapsis_km: Number;
  period_min: Number;
  raan: Number;
  reference_system: string;
  regime: string;
  semi_major_axis_km: Number;
};

export interface Payload {
  id: string;
  customers: string[];
  manufacturer: string;
  nationality: string;
  norad_id: Number[];
  orbit_params: PayloadOrbitParams;
  orbit: string;
  payload_mass_kg: Number;
  payload_mass_lbs: Number;
  payload_type: string;
  reused: Boolean;
}

export interface Mission {
  description: string;
  id: string;
  manufacturers: string[];
  name: string;
  twitter: string;
  website: string;
  wikipedia: string;
  payloads: Payload[];
}

export interface MissionList {
  missions: Mission[];
}
export interface MissionFind {
  find?: {
    id?: string;
    manufacturer?: string;
    name?: string;
    payload_id?: string;
  };
}
