export type CategoryCOnstructorProps = {
    category_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
}


export type CategoryCreateCOmmand = {
    name: string;
    description?: string | null;
    is_active?: boolean;

}

export class Category {
    category_id: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;


    constructor(props: CategoryCOnstructorProps){
        this.category_id = props.category_id?? null;
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date()
    }

    static create(props: CategoryCreateCOmmand): Category {
        const category = new Category(props);
        return category;
    }
    update(props: Partial<CategoryCOnstructorProps>): Category {
        return Object.assign(this, props);
    }
}