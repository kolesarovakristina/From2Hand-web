package sk.bazos.service;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sk.bazos.model.Add;
import sk.bazos.model.CategoryItem;
import sk.bazos.repository.AddRepository;
import sk.bazos.repository.CategoryItemRepository;

import java.io.IOException;
import java.util.List;
@RestController
@RequestMapping("/categoryItem")
@Api(value = "categoryItem", description = "Basic crud over category item entity.")
public class CategoryItemService {

    @Autowired
    private CategoryItemRepository categoryItemRepository;

    @PostMapping(value="/postCategory")
        public Long createAdd(@RequestParam String categoryTitle, @RequestParam String subcategoryTitle, @RequestParam MultipartFile photoData) throws IOException {
        CategoryItem categoryItemForSave = new CategoryItem();
        categoryItemForSave.setCategoryTitle(categoryTitle);
        categoryItemForSave.setSubcategoryTitle(subcategoryTitle);
        categoryItemForSave.setPhotoData(photoData.getBytes());
        return categoryItemRepository.save(categoryItemForSave).getId();
    }

    @GetMapping(value="/getAllCategories",produces = "application/json")
    public List<CategoryItem> getAdds() {
        return categoryItemRepository.findAll();
    }

}

