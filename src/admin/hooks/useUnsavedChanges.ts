import { useEffect, useCallback, useRef } from "react";
import { useAdminI18n } from "@/admin/i18n";

/**
 * Hook that warns users when they try to leave a page with unsaved changes.
 * @param isDirty - whether the form has unsaved changes
 */
export function useUnsavedChanges(isDirty: boolean) {
  const t = useAdminI18n();

  useEffect(() => {
    if (!isDirty) return;

    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);
}

/**
 * Hook to track form dirtiness by comparing current value to initial.
 */
export function useFormDirty<T>(initial: T, current: T): boolean {
  return JSON.stringify(initial) !== JSON.stringify(current);
}
