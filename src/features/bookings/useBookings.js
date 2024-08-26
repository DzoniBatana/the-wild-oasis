import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings, // eslint-disable-line
    error, // eslint-disable-line
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, error, bookings };
}
