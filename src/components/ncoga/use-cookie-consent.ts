"use client";

import { useSyncExternalStore } from "react";

import {
  readConsentChoice,
  subscribeToConsent,
  type ConsentChoice,
} from "@/lib/cookie-consent";

function subscribeToClient() {
  return () => {};
}

export function useIsClient() {
  return useSyncExternalStore(
    subscribeToClient,
    () => true,
    () => false,
  );
}

export function useCookieConsent(): ConsentChoice | null {
  return useSyncExternalStore(
    subscribeToConsent,
    readConsentChoice,
    () => null,
  );
}
