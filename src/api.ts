import type { ServicesType, DetailsType } from "./serviceTypes";

const BASE_URL = "http://localhost:7070/api/services";

export const fetchServices = async (): Promise<ServicesType> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Ошибка загрузки сервисов: ${response.status}`);
  }

  return await response.json();
};

export const fetchDetails = async (id: string): Promise<DetailsType> => {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка загрузки деталей: ${response.status}`);
  }

  return await response.json();
};
