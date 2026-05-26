export function removeUndefinedDeep(value: any): any {
  if (Array.isArray(value)) {
    return value
      .filter((item) => item !== undefined)
      .map(removeUndefinedDeep);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, removeUndefinedDeep(v)])
    );
  }

  return value;
}

export function logFirestoreSavePayload(data: unknown) {
  console.log("Firestore Save Payload", JSON.stringify(data, null, 2));
}
