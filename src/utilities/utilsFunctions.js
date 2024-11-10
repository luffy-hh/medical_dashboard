import dayjs from "dayjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const expireToken = () => {
  localStorage.clear();
  window.location.href = "/auth";
};

const parseDate = (value) => {
  // console.log(value);
  // Check if the value is already in DD-MM-YYYY format
  if (dayjs(value, "DD-MM-YYYY", true).isValid()) {
    // console.log("dd-mm-yyy");
    // console.log(dayjs(value, "DD-MM-YYYY"));
    return dayjs(value, "DD-MM-YYYY");
  }
  // If the value is in YYYY-DD-MM format, convert it to DD-MM-YYYY
  if (dayjs(value, "YYYY-DD-MM", true).isValid()) {
    console.log("yyyy-dd-mm");

    return dayjs(value, "YYYY-DD-MM");
  }
  // If the value is in YYYY-MM-DD format, convert it to DD-MM-YYYY
  if (dayjs(value, "YYYY-MM-DD", true).isValid()) {
    console.log("yyyy-mm-dd");

    return dayjs(value, "YYYY-MM-DD");
  }

  return null;
};

const daysOfWeek = [];
const today = new Date();
const firstDayOfWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - ((today.getDay() + 7) % 7),
);

for (let i = 0; i < 7; i++) {
  const day = new Date(firstDayOfWeek.getTime() + i * 86400000);
  const dayOfWeek = day.toLocaleString("en-US", { weekday: "long" });
  const dayOfMonth = day.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  daysOfWeek.push(`${dayOfWeek} ${dayOfMonth}`);
}

const photoUrlFix = (data, folderAttributes) => {
  const processItem = (item) => {
    let updatedItem = { ...item };

    folderAttributes.forEach(({ folder, attributes }) => {
      attributes.forEach((attribute) => {
        const attributeParts = attribute.split(".");
        if (
          attributeParts.length === 2 &&
          Array.isArray(item[attributeParts[0]])
        ) {
          // Handle the case where the attribute is nested within an array
          const arrayName = attributeParts[0];
          const nestedAttribute = attributeParts[1];

          updatedItem[arrayName] = item[arrayName].map((nestedItem) => {
            let updatedNestedItem = { ...nestedItem };
            if (
              Object.prototype.hasOwnProperty.call(nestedItem, nestedAttribute)
            ) {
              if (nestedItem[nestedAttribute] === null) {
                updatedNestedItem[nestedAttribute] = null;
              } else {
                updatedNestedItem[nestedAttribute] =
                  BASE_URL + folder + nestedItem[nestedAttribute];
              }
            }
            return updatedNestedItem;
          });
        } else if (Object.prototype.hasOwnProperty.call(item, attribute)) {
          // Handle the case where the is not nested
          if (item[attribute] === null) {
            updatedItem[attribute] = null;
          } else {
            updatedItem[attribute] = BASE_URL + folder + item[attribute];
          }
        }
      });
    });

    return updatedItem;
  };

  if (Array.isArray(data)) {
    return data.map(processItem);
  } else if (typeof data === "object" && data !== null) {
    return processItem(data);
  } else {
    throw new Error("Invalid data type. Expected an array or an object.");
  }
};

const transformObject = (obj) => {
  // Initialize the result object with properties that should remain unchanged
  const result = {
    param: [],
    note: obj.note || "",
    attaches: obj.attaches || "",
    record_date: obj.record_date || "",
  };

  // Loop through each property in the input object
  for (const key in obj) {
    // Skip 'note', 'photo', and 'record_date'
    if (key !== "note" && key !== "attaches" && key !== "record_date") {
      // Add the key-value pair to the param array in the desired format
      result.param.push({ key: key, value: obj[key] });
    }
  }

  return result;
};

export {
  transformObject,
  classNames,
  expireToken,
  parseDate,
  daysOfWeek,
  photoUrlFix,
};
