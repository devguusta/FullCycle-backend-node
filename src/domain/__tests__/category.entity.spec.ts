import { Category } from "../category.entity";

describe('Category Unit Tests', () => {


    test('should create a category with default values', () => {
        const category = new Category({
            name: 'Movie',
    
        })

    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('Movie');
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
    })

    test('should create a category with all values', () => {
      
       

        const created_at = new Date();
        const category = new Category({
        name: 'Movie',
        description: 'Movie description'
        , is_active: false,
        created_at: created_at
    });
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('Movie description');
    expect(category.is_active).toBeFalsy();
    expect(category.created_at).toBe(created_at);
    })

    test('should create a category with name, description and is inactive ', () => {
    
        const created_at = new Date();
        const category =  Category.create({
        name: 'Movie',
        description: 'Movie description'
        , is_active: false,
      
    });
})
    test('should create a category with name, description and is active ', () => {
    
        const created_at = new Date();
        const category =  Category.create({
        name: 'Movie',
        description: 'Movie description'
        , is_active: true,
      
    });
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('Movie description');
    

})
test('should active category', () => {
        
        const created_at = new Date();
        const category =  Category.create({
        name: 'Movie',
        description: 'Movie description'
        , is_active: false,
    
    });
    category.activate();
    expect(category.is_active).toBeTruthy();
    
})

test('should deactivate category', () => {
        
    const created_at = new Date();
    const category =  Category.create({
    name: 'Movie',
    description: 'Movie description'
    , is_active: true,

});
category.deactivate();
expect(category.is_active).toBeFalsy();



})

})