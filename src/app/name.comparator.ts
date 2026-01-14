import { ClrDatagridComparatorInterface } from "@clr/angular";
import { UserPayload } from "./interfaces/user-payload";

export class NameComparator implements ClrDatagridComparatorInterface<UserPayload> {
compare(a: UserPayload, b: UserPayload): number {
        const last = a.lastName.localeCompare(b.lastName);
        return last !== 0 ? last : a.firstName.localeCompare(b.firstName);
    }
}